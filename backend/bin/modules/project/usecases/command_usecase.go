package usecases

import (
	"errors"
	"login-api-jwt/bin/modules/project"
	"login-api-jwt/bin/modules/project/models"
	"login-api-jwt/bin/pkg/databases"
	"login-api-jwt/bin/pkg/utils"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

// CommandUsecase implements project.UsecaseCommand interface
type CommandUsecase struct {
	ProjectRepositoryCommand project.RepositoryCommand
	projectRepositoryQuery   project.RepositoryQuery
	ORM                      *databases.ORM
}

// NewCommandUsecase creates a new instance of CommandUsecase
func NewCommandUsecase(q project.RepositoryCommand, query project.RepositoryQuery, orm *databases.ORM) project.UsecaseCommand {
	return &CommandUsecase{
		ProjectRepositoryCommand: q,
		projectRepositoryQuery:   query,
		ORM:                      orm,
	}
}

// PostRegister handles project registration
func (q CommandUsecase) PostProject(ctx *gin.Context) {

	var result utils.ResultResponse = utils.ResultResponse{
		Code:    http.StatusBadRequest,
		Data:    nil,
		Message: "Failed Post Project",
		Status:  false,
	}
	var projectModel models.Project
	err := ctx.ShouldBind(&projectModel)
	if err != nil {
		ctx.AbortWithStatusJSON(result.Code, result)
		return
	}

	authHeader := ctx.GetHeader("Authorization")
	if authHeader == "" {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Authorization header missing"})
		return
	}

	tokenString := strings.Replace(authHeader, "Bearer ", "", 1)
	token, err := utils.ValidateUserJWTToToken(tokenString)

	if err != nil {
		if err.Error() == "invalid token" {
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
		ctx.AbortWithError(http.StatusInternalServerError, err)
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "invalid claims"})
	}
	projectModel.User_id = claims["id"].(string)

	// Generate a unique ID for project
	projectModel.ID = uuid.NewString()

	// Capitalize first letter of project's name
	projectModel.Name = strings.Title(projectModel.Name)

	// Create project record in the database
	r := q.ProjectRepositoryCommand.Create(ctx, projectModel)
	if r.DB.Error != nil {
		// Check if the error is due to a duplicate email or projectname
		if strings.Contains(r.DB.Error.Error(), "duplicate key value violates unique constraint \"projects_name_key\"") {
			// If data is already found, abort with status "email or projectname already used"
			result.Message = "project name already used"
			ctx.AbortWithStatusJSON(result.Code, result)
			return
		}

		if strings.Contains(r.DB.Error.Error(), "insert or update on table \"projects\" violates foreign key constraint \"projects_user_id_fkey\"") {
			// If data user id not valid return message "user id not valid"
			result.Message = "user id not valid"
			ctx.AbortWithStatusJSON(result.Code, result)
			return
		}
		result.Code = http.StatusInternalServerError
		ctx.AbortWithError(http.StatusInternalServerError, r.DB.Error)
		return
	}

	// Response data for successful registration
	projectRegisterResponse := models.PostProjectResponse{
		ID:      projectModel.ID,
		Name:    projectModel.Name,
		User_id: projectModel.User_id,
	}

	// Save project record again after successful registration
	r = q.ProjectRepositoryCommand.Save(ctx, projectModel)

	// Check if an error occurred while saving
	if r.DB.Error != nil {
		// If there was an error, return Internal Server Error with error message
		ctx.AbortWithError(http.StatusInternalServerError, r.DB.Error)
		return
	}
	// If project record was successfully saved, respond with project's registration data
	ctx.JSON(http.StatusOK, projectRegisterResponse)
}

func (q CommandUsecase) PutProject(ctx *gin.Context) {
	projectID := ctx.Param("id")

	var projectModel models.Project

	err := ctx.ShouldBind(&projectModel)
	if err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
	}

	projectModel.ID = projectID

	authHeader := ctx.GetHeader("Authorization")
	if authHeader == "" {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Authorization header missing"})
		return
	}

	tokenString := strings.Replace(authHeader, "Bearer ", "", 1)
	token, err := utils.ValidateUserJWTToToken(tokenString)

	if err != nil {
		if err.Error() == "invalid token" {
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
		ctx.AbortWithError(http.StatusInternalServerError, err)
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "invalid claims"})
	}
	projectModel.User_id = claims["id"].(string)

	// Response data for successful registration
	Response := projectModel

	r := q.ProjectRepositoryCommand.Updates(ctx, Response)
	if r.DB.Error != nil {
		// If there was an error, return Internal Server Error with error message
		ctx.AbortWithError(http.StatusInternalServerError, r.DB.Error)
		return
	}

	if r.DB.RowsAffected == 0 {
		// If there was an error, return Internal Server Error with error message
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Project ID not available"})
		return
	}
	// If messageprovider record was successfully saved, respond with messageprovider's registration data
	ctx.JSON(http.StatusOK, Response)

}

func (q CommandUsecase) DeleteProject(ctx *gin.Context) {
	var result utils.ResultResponse = utils.ResultResponse{
		Code:    http.StatusBadRequest,
		Data:    nil,
		Message: "Failed Delete Project",
		Status:  false,
	}

	var id string = ctx.Param("id")

	authHeader := ctx.GetHeader("Authorization")
	if authHeader == "" {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Authorization header missing"})
		return
	}

	tokenString := strings.Replace(authHeader, "Bearer ", "", 1)
	_, err := utils.ValidateUserJWTToToken(tokenString)

	if err != nil {
		if err.Error() == "invalid token" {
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
		ctx.AbortWithError(http.StatusInternalServerError, err)
	}

	isExistData := q.projectRepositoryQuery.FindOneByID(ctx, id)
	if isExistData.DB.Error != nil {
		if errors.Is(isExistData.DB.Error, gorm.ErrRecordNotFound) {
			ctx.AbortWithStatusJSON(result.Code, result)
			return
		}
		result.Code = http.StatusInternalServerError
		ctx.AbortWithStatusJSON(result.Code, result)
		return
	}

	deletedProject := q.ProjectRepositoryCommand.Delete(ctx, id)
	if deletedProject.DB.Error != nil {
		result.Code = http.StatusInternalServerError
		ctx.AbortWithStatusJSON(result.Code, result)
		return
	}

	result = utils.ResultResponse{
		Code:    http.StatusOK,
		Data:    isExistData.Data,
		Message: "Success Delete Project",
		Status:  true,
	}
	ctx.JSON(result.Code, result)
}
