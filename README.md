
#在线非对称加解密

##开发动机

1.学习nuxt.js框架的一个demo

2.有时候在网上发帖时候，让别人留下一些个人信息，但是这些个人信息是直接公开展示的，
这容易造成隐私泄露，所以采用加密方式让别人使用你的公钥加密数据后再在公开平台上分享，而
只有你有私钥可以直接解开。

##使用方法
1.第一次需要生成一对秘钥，然后你将公钥地址分享给别人

2.别人点击地址跳转到加密界面会自带你的公钥，使用你的公钥加密数据

3.加密后别人可以分享加密后文本或者分享加密后的文本链接，你点击后会跳转到解密界面，并自动填充加密文本，你只需要点击解密即可解密


# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
