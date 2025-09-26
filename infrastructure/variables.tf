variable "keycloak_client_id" {
  type        = string
  description = "The client id of the service account used by the keycloak terraform provider"
  default     = "genesis_infrastructure"
}

variable "keycloak_client_secret" {
  type        = string
  description = "The client secret of the service account used by the keycloak terraform provider"
}

variable "keycloak_url" {
  type        = string
  description = "The url of the keycloak server"
  default     = "http://localhost:8081"
}

variable "genesis_app" {
  type = object({
    valid_redirect_uris = list(string)
  })
  description = "The configuration of genesis app"
}
