variable "keycloak_client_id" {
  type        = string
  description = "The client id of the service account used by the keycloak terraform provider"
}

variable "keycloak_admin_username" {
  type        = string
  description = "The username of the keycloak admin"
}

variable "keycloak_admin_password" {
  type        = string
  description = "The password of the keycloak admin"
}

variable "keycloak_url" {
  type        = string
  description = "The url of the keycloak server"
  default     = "http://localhost:8081"
}

variable "keycloak_smtp" {
  type = object({
    host = string
    port = number
    from = string
  })
  description = "The keycloak smtp config"
  default = {
    host = "auth_mail"
    port = 1025
    from = "admin.genesis@devhalos.com"
  }
}

variable "genesis_app" {
  type = object({
    messaging = object({
      web_app = object({
        valid_redirect_uris = list(string)
        web_origins         = list(string)
      })
    })
  })
  description = "The configuration of genesis app"
}
