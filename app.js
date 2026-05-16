App({
  onLaunch() {
    const cloudConfig = require("./utils/cloud-config");
    const store = require("./utils/store");
    if (cloudConfig.cloudEnvId && wx.cloud) {
      wx.cloud.init({
        env: cloudConfig.cloudEnvId,
        traceUser: true
      });
    }
    store.ensureSeedData().catch((error) => {
      console.warn("Seed data initialization failed.", error);
    });
  }
});
