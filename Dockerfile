FROM hayd/ubuntu-deno

EXPOSE 8000

WORKDIR /app

ADD . /app

RUN deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts

ENV PATH /root/.deno/bin:$PATH

RUN deno cache server.ts

ENTRYPOINT [ "denon" ]
CMD ["run",  "--allow-net", "server.ts"]