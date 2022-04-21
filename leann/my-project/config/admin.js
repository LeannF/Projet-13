module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a33b7b66a69e598d5710415bc66b9778'),
  },
});
