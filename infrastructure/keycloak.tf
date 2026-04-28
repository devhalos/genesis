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

