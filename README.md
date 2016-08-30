# grunt-live-server

This is a live/express HTTP server image using `grunt-contrib-watch`
and `grunt-contrib-connect`.

## Usage

To use the image you must mount your content to `/web` and proxy
port 8000 and 35729.

```
$ docker run \
  -v '<path>:/web' \
  -p 8000:8000 \
  -p 35729:35729
  benningm/grunt-live-server
```

Or with a `docker-compose.yml` file:

```
  web:
    build: benningm/grunt-live-server
    ports:
      - "8000:8000"
      - "35729:35729"
    volumes:
      - ".:/web"
```

