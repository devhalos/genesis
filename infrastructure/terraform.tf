terraform {
  required_providers {

    keycloak = {
      source  = "mrparkers/keycloak"
      version = "4.4.0"
    }
  }

  required_version = ">= 1.13"
}

provider "keycloak" {
  client_id = var.keycloak_client_id
  username  = var.keycloak_admin_username
  password  = var.keycloak_admin_password
  url       = var.keycloak_url
}
