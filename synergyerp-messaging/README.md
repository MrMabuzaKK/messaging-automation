## SynergyERP Messaging Automation

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

The CONTACT form could be edited or create new pages to connect the endpoints for:
1. Email (I have used Nodemailer)
2. SMS (I have used Twilio)

This solution could be integrated with Synergyerp's Actionable Messaging product to optimise communication and save costs.

Create .env file to configure your email address and password.
