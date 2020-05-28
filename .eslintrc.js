module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "env": {
      "browser": true,
    },
    "globals": {
        "expect": true,
        "protractor": true,
        "by": true,
        "it": true,
        "$": true,
        "driver": true,
        "browser": true,
        "element": true
    },
    "rules": {
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "arrow-parens": ["error", "always"],
      "no-useless-escape": "off",
      "global-require": "off",
      "no-console": "off",
      "import/no-dynamic-require": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/label-has-for": "off",
      "react/jsx-filename-extension": "off",
      "react/no-did-mount-set-state": "off",
      "max-len": ["error", { "code": 200 }],
      "quote-props": "off",
      "func-names": "off", // <-- Avoids "unexpected unnamed async function" in async mocha tests
    },
};