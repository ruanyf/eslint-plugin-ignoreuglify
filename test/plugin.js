var assert = require("assert");
var path = require("path");
var CLIEngine = require("eslint").CLIEngine;
var plugin = require("..");

function execute(file, baseConfig) {
  if (!baseConfig) baseConfig = {};

  var cli = new CLIEngine({
    extensions: ["ignoreuglify"],
    baseConfig: {
      settings: baseConfig.settings,
      rules: Object.assign({
        "no-console": 2,
      }, baseConfig.rules),
    },
    ignore: false,
    useEslintrc: false,
  });
  cli.addPlugin("ignoreuglify", plugin);
  var results = cli.executeOnFiles([path.join(__dirname, "fixtures", file)]).results;
  return results[0] && results[0].messages;
}

describe('plugin', function () {
  it('uglified file should be skipped', function () {
    var result = execute('uglified.js');
    assert.equal(result.length, 0);
  });

  it('normal file should not be skipped', function () {
    var result = execute('normal.js');
    assert.equal(result.length, 1);
  });

});

