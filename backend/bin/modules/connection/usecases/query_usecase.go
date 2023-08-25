package usecases

import (
	"errors"
	"fmt"
	"login-api-jwt/bin/modules/connection"
	"login-api-jwt/bin/pkg/databases"
	"login-api-jwt/bin/pkg/utils"
	"math"
	"net/http"
	"reflect"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// QueryUsecase implements connection.UsecaseQuery interface
type QueryUsecase struct {
	ConnectionRepositoryQuery connection.RepositoryQuery
	ORM                       *databases.ORM
}

// NewQueryUsecase creates a new instance of QueryUsecase
func NewQueryUsecase(q connection.RepositoryQuery, orm *databases.ORM) connection.UsecaseQuery {
	return &QueryUsecase{
		ConnectionRepositoryQuery: q,
		ORM:                       orm,
	}
}

// GetByID retrieves connection data by ID and responds with the result
func (q QueryUsecase) GetByID(ctx *gin.Context) {
	id := ctx.Param("id")

	// Call FindOneByID method to retrieve connection data by ID
	ret := q.ConnectionRepositoryQuery.FindOneByID(ctx, id)
	// If there was an error during query, abort with a Bad Request status
	if ret.DB.Error != nil {
		if errors.Is(ret.DB.Error, gorm.ErrRecordNotFound) {
			// If data is not found in the database, abort with status Unauthorized
			ctx.AbortWithStatusJSON(http.StatusNotFound, gin.H{"error": fmt.Sprintf("Connection with id %s not found", id)})
			return
		}

		ctx.AbortWithError(http.StatusBadRequest, ret.DB.Error)
		return
	}

	// Respond with retrieved connection data in JSON format
	res := ret.Data
	ctx.JSON(http.StatusOK, res)
}

// Get All retrieves All connection data with pagination result
func (q QueryUsecase) GetAll(ctx *gin.Context) {
	var totalCount, page, limit int
	var err error

	page, err = strconv.Atoi(ctx.Query("page"))
	// handling when error set default page value 1
	if err != nil || page < 1 {
		page = 1
	}

	// handling when error set default limit value 10
	limit, err = strconv.Atoi(ctx.Query("limit"))
	if err != nil || limit == 0 {
		limit = 10
	}

	// count data connection
	var count = q.ConnectionRepositoryQuery.CountData(ctx)

	// parsing result count data to Integer
	if reflect.ValueOf(count.Data).CanInt() {
		totalCount = int(reflect.ValueOf(count.Data).Int())
	}

	// calculate total page
	var totalPage int = int(math.Ceil(float64(totalCount) / float64(limit)))
	// handling if max total page
	if page > totalPage {
		page = totalPage
	}

	// set skip for offset data
	var skip = limit * (page - 1)
	var result utils.ResultResponsePagination = utils.ResultResponsePagination{
		Code:      http.StatusBadRequest,
		Data:      nil,
		Limit:     limit,
		Page:      page,
		TotalData: totalCount,
		TotalPage: totalPage,
		Message:   "Failed Get Data Connection",
		Status:    false,
	}

	if totalCount == 0 {
		result.Code = http.StatusNotFound
		result.Message = "Data Not Found"
		ctx.AbortWithStatusJSON(result.Code, result)
		return
	}

	getConnectionData := q.ConnectionRepositoryQuery.FindAll(ctx, skip, limit)
	if getConnectionData.DB.Error != nil {
		ctx.AbortWithStatusJSON(result.Code, result)
		return
	}

	result = utils.ResultResponsePagination{
		Code:      http.StatusOK,
		Data:      getConnectionData.Data,
		Limit:     limit,
		Page:      page,
		TotalData: totalCount,
		TotalPage: totalPage,
		Message:   "Success Get Data Connection",
		Status:    true,
	}
	ctx.JSON(http.StatusOK, result)
	return
}

// GetAccess responds with a success message indicating connection access
func (q QueryUsecase) GetAccess(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{"message": "connection access success"})
}

// // GetByName retrieves connection data by name and responds with the result
// func (q QueryUsecase) GetByName(ctx *gin.Context) {
// 	name := ctx.Param("name")
// 	fmt.Printf("name access %s", name)

// 	// Call FindOneByName method to retrieve connection data by name
// 	ret := q.ConnectionRepositoryQuery.FindOneByName(ctx, name)

// 	// Respond with retrieved connection data in JSON format
// 	ctx.JSON(http.StatusOK, ret.Data)
// }