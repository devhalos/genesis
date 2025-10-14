output "genesis_messaging_web_app_client_id" {
  description = "The client id of the genesis messaging web app"
  value       = keycloak_openid_client.genesis_messaging_web_app.client_id
}
