FROM node
COPY --from=nbg00813.live.dynatrace.com/linux/oneagent-codemodules:nodejs / /
ENV LD_PRELOAD /opt/dynatrace/oneagent/agent/lib64/liboneagentproc.so

ADD . .

RUN npm ci
RUN npm run build

CMD npm run start