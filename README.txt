Local preview:

1. Open a terminal.
2. Run:
   python3 -m http.server 4173 --directory /Users/ttaohe/master/code/dev/ttaoai-homepage
3. Visit:
   http://127.0.0.1:4173

Server deployment:
- Copy the files in this folder to /var/www/ttaoai-home
- Serve them with Caddy using:
  ttaoai.cn, www.ttaoai.cn {
      root * /var/www/ttaoai-home
      file_server
  }

Notes:
- This is a plain static site with no build step.
- Keep chat.ttaoai.cn pointed at your chat service separately.
