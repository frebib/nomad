# Require TLS
tls {
  http = true
  rpc  = true

  verify_server_hostname = true
  verify_https_client    = true

  ca_file   = "/etc/nomad.d/tls/ca.crt"
  cert_file = "/etc/nomad.d/tls/agent.crt"
  key_file  = "/etc/nomad.d/tls/agent.key"
}