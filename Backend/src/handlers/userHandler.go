package handlers

import (
	"PMD/controllers"

	"github.com/gin-gonic/gin"
)

import (
	
	"PMD/middleware"

)

func SetupUserRoutes(engine *gin.Engine) {
	r := engine.Group("/user")
	r.GET("/all", controllers.GetAllUsers)
	r.GET("/:user_id", controllers.GetUserById)
	r.POST("/remove/:user_id", controllers.DeleteUser)
	r.POST("/add", controllers.Adduser)
	r.POST("/login", middleware.AuthenticationMiddlewareOne,controllers.Login)
	r.POST("/update/:user_id", middleware.AuthenticationMiddlewareOne,controllers.UpdateUserRole)
	r.POST("/delete/project",controllers.DeleteProjectByIdController)

}
