// https://mihomo.party/docs/guide/override/javascript

const ips = [
  "104.20.29.141",
  "162.159.128.142",
  "104.20.18.103",
  "104.20.21.8",
  "162.159.129.42",
  "104.20.29.141",
  "162.159.128.142",
  "104.20.18.103",
  "104.20.21.8",
  "162.159.129.42"
]


function main(config) {
  for (let [index,proxy] of config["proxies"].entries()){
    proxy.server = ips[index]
  }
  return config
}
