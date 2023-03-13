package handlers

import (
	logger "PMD/Logger"

	"PMD/controllers"

	"github.com/gin-gonic/gin"
)

func SetupUserRoutes(engine *gin.Engine) {
	r := engine.Group("/user")
	r.GET("/users", controllers.GetAllActiveUsers)
	r.POST("/update/:user_id", controllers.UpdateUser)
	r.POST("/update/email/:user_id", controllers.UpdateEmail)
	r.GET("/all", controllers.GetAllUsers)
	r.GET("/inactive", controllers.GetAllInactiveUsers)
	r.GET("/:user_id", controllers.GetUserById)
	r.POST("/remove/:user_id", controllers.DeleteUser)
	r.POST("/add", controllers.Adduser)
	r.GET("/projects/:project_id", controllers.GetUsersByProjectID)
	r.POST("/login", logger.Login)

}
