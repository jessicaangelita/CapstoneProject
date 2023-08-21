package main

import (
	userHandler "login-api-jwt/bin/modules/user/handlers"
	userRepositoryCommands "login-api-jwt/bin/modules/user/repositories/commands"
	userRepositoryQueries "login-api-jwt/bin/modules/user/repositories/queries"
	userUsecases "login-api-jwt/bin/modules/user/usecases"
	"login-api-jwt/bin/pkg/databases"
	"login-api-jwt/bin/pkg/servers"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables from .env file
	godotenv.Load()

	// Create instance of Gin server
	srv := &servers.GinServer{}
	orm := &databases.ORM{}
	// userHandler := &handlers.UserServer{}

	// Get dsn from environment variables
	dsn := os.Getenv("DB_DSN")

	// Initialize Gin server
	srv.InitGin()
	orm.InitDB(dsn)
	// srv.InitTryRoutes()

	// Set up user-related HTTP routes(orm) and handlers(srv)
	setUserHTTP(orm, srv)

	// Get port from environment variables, or use default port 8050
	defaultPort := "8050"
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	// Start Gin server on given port
	err := srv.Start(port, orm)

	if err != nil {
		panic(err)
	}
}

func setUserHTTP(orm *databases.ORM, srv *servers.GinServer) {
	// Create a user query repository and use case for reading user data
	userQueryRepository := userRepositoryQueries.NewQueryRepository(orm)
	userQueryUsecase := userUsecases.NewQueryUsecase(userQueryRepository, orm)

	// Create a user command repository and use case for writing user data
	userCommandRepository := userRepositoryCommands.NewCommandRepository(orm)
	userCommandUsecase := userUsecases.NewCommandUsecase(userCommandRepository, orm)

	// Initialize user HTTP handlers with query and command use cases, and link them with the Gin server
	userHandler.InitUserHTTPHandler(userQueryUsecase, userCommandUsecase, srv)
}
