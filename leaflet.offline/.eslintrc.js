module.exports = {
    "env": {
      "browser": true
    },
    "extends": "airbnb-base",
    "rules": {
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],
      "no-underscore-dangle": 0
    }
};
