package handlers

import (
	"PMD/controllers" 
	"github.com/gin-gonic/gin"
)

func SetupUserRoutes(engine *gin.Engine) {
	r := engine.Group("/user")
	r.GET("/users", controllers.GetAllActiveUsers)
    r.GET("/all",controllers.GetAllUsers)
    r.GET("/inactive",controllers.GetAllInactiveUsers)
    r.GET("/:user_id",controllers.GetUserById)
    r.POST("/remove/:user_id",controllers.DeleteUser)
	r.POST("/add", controllers.Adduser)
    r.GET("/projects/:project_id",controllers.GetUsersByProjectID)
}
