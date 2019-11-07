export default {
    graphQLEndPoint: process.env.REACT_APP_GRAPHQL_ENDPOINT || '',
    authAuthority: process.env.REACT_APP_AUTH_AUTHORITY || '',
    authClientId: process.env.REACT_APP_AUTH_CLIENT_ID,
    migrationEndpoint: process.env.REACT_APP_MIGRATE_DB_ENDPOINT || '',
    refreshGatewayEndpoint: process.env.REACT_APP_REFRESH_GATE_WAY_ENDPOINT || '',
  };