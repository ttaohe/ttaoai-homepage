# Deployment

## Overview

This site is a plain static page with no build step and no backend dependency.

Files to deploy:
- `index.html`
- `style.css`
- `script.js`

Deploy them to a directory such as:

```bash
/var/www/ttaoai-home
```

## Caddy example

```caddy
ttaoai.cn, www.ttaoai.cn {
    root * /var/www/ttaoai-home
    file_server
}
```

## Suggested flow

```bash
sudo mkdir -p /var/www
cd /var/www
sudo git clone https://github.com/ttaohe/ttaoai-homepage.git ttaoai-home
```

Then reload Caddy after updating your config:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

## DNS

Recommended domain split:
- `ttaoai.cn` -> landing page
- `www.ttaoai.cn` -> landing page
- `chat.ttaoai.cn` -> existing chat service

## Important

If the root domain still redirects to `chat.ttaoai.cn`, remove the old redirect rule from your server, CDN, or proxy layer.
