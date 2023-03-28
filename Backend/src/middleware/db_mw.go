package middleware

import (
	"PMD/util"
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

func DBConnectionMiddleware(c *gin.Context) {
	const functionName = "middleware.DBConnectionMiddleware"
	util.ConnectToDatabase()
	c.Next()
}

// func AuthenticationMiddlewareOne(next http.Handler) http.Handler {
// 	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

// 		buf := new(bytes.Buffer)
// 		buf.ReadFrom(r.Body)
// 		requestBody := buf.String()

// 		// Log the request method, URL path, and request body
// 		log.Printf("%s %s: %s", r.Method, r.URL.Path, requestBody)
// 		log.Print("Executing middlewareOne")
// 		next.ServeHTTP(w, r)
// 		log.Print("Executing middlewareOne again")
// 	})
// }

func AuthenticationMiddlewareOne(c *gin.Context) {

	buf := new(bytes.Buffer)
	buf.ReadFrom(c.Request.Body)
	requestBody := buf.String()

	// Log the request method, URL path, and request body

	fmt.Println("aniket kumar", requestBody)

	authHeader := c.Request.Header.Get("Authorization")

	// Check whether the header starts with "Bearer"
	if !strings.HasPrefix(authHeader, "Bearer ") {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	fmt.Println(authHeader, "just checking",authHeader[7:])

	token, err := jwt.Parse(authHeader[7:], func(token *jwt.Token) (interface{}, error) {
		// validate the signing method
		// if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
		// 	return nil, fmt.Errorf("unexpected signing method: %v")
		// }

		// return the secret key used to sign the token
		return []byte("mysecretkey"), nil
	})
	if err != nil {
		fmt.Println("Error parsing token:", err)
	}

	// validate the token claims
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		fmt.Println(claims, "aniket kumar")
	} else {
		fmt.Println("Invalid token")
	}

	// Extract the token f//rom the header
	fmt.Println("%s %s: %s", c.Request.Method, c.Request.URL.Path, requestBody, "asdd", token)

	// Restore the request body to its original state
	c.Request.Body = ioutil.NopCloser(bytes.NewReader(buf.Bytes()))

	// Call the next handler
	c.Next()

}
