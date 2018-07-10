module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "globals": {
        "protractor": true,
        "by": true,
        "it": true,
        "browser": true,
        "element": true
    },
    "rules": {
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/label-has-for": "off",
      "react/jsx-filename-extension": "off",
      "react/no-did-mount-set-state": "off"
    }
};