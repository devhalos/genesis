resource "keycloak_realm" "genesis" {
  realm                    = "genesis"
  display_name             = "Genesis"
  registration_allowed     = true
  reset_password_allowed   = true
  login_with_email_allowed = true
}

resource "keycloak_openid_client" "genesis_app" {
  realm_id              = keycloak_realm.genesis.id
  client_id             = "genesis-app"
  name                  = "Genesis"
  description           = "Auth client for the genesis app"
  access_type           = "PUBLIC"
  standard_flow_enabled = true
  valid_redirect_uris   = var.genesis_app.valid_redirect_uris
}
