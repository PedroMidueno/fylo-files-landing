export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    // La nueva estructura para configurar la duración de la sesión
    sessions: {
      // Duración máxima del token de refresco (mantiene la sesión viva)
      maxRefreshTokenLifespan: env('ADMIN_REFRESH_TOKEN_MAX_AGE', '7d'),
      // Duración del token de sesión (caducidad del JWT)
      maxSessionLifespan: env('ADMIN_SESSION_TOKEN_MAX_AGE', '1d'),
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
