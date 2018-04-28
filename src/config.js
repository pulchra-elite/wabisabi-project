export const config = {
  development: {
    API_HOST: "http://localhost:3000"
  }
};

export const getConfig = () => config[process.env.NODE_ENV];
