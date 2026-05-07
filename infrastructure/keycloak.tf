resource "keycloak_realm" "genesis" {
  realm                          = "genesis"
  display_name                   = "Genesis"
  registration_allowed           = true
  reset_password_allowed         = true
  login_with_email_allowed       = true
  registration_email_as_username = true
  verify_email                   = true
  remember_me                    = true

  smtp_server {
    host = var.keycloak_smtp.host
    port = var.keycloak_smtp.port
    from = var.keycloak_smtp.from
  }
}

resource "keycloak_openid_client" "genesis_messaging_web_app" {
  realm_id              = keycloak_realm.genesis.id
  client_id             = "genesis-messaging-web-app"
  name                  = "Genesis Messaging Web App"
  description           = "Auth client for the genesis messaging web app"
  access_type           = "PUBLIC"
  standard_flow_enabled = true
  valid_redirect_uris   = var.genesis_app.messaging.web_app.valid_redirect_uris
  web_origins           = var.genesis_app.messaging.web_app.web_origins
}

resource "keycloak_openid_client" "genesis_messaging_service" {
  realm_id                     = keycloak_realm.genesis.id
  client_id                    = "genesis-messaging-service"
  name                         = "Genesis Messaging Service"
  description                  = "Client to access keycloak data from genesis messaging service"
  access_type                  = "CONFIDENTIAL"
  standard_flow_enabled        = false
  direct_access_grants_enabled = false
  service_accounts_enabled     = true
}

data "keycloak_openid_client" "realm_management_client" {
  realm_id  = keycloak_realm.genesis.id
  client_id = "realm-management"
}

resource "keycloak_openid_client_service_account_role" "service_account_role_assignment" {
  realm_id                = keycloak_realm.genesis.id
  service_account_user_id = keycloak_openid_client.genesis_messaging_service.service_account_user_id
  client_id               = data.keycloak_openid_client.realm_management_client.id
  role                    = "view-users"
}
