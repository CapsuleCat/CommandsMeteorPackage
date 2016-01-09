Package.describe({
  name: 'capsulecat:commands',
  version: '1.0.0',
  summary: 'Dispatch commands synchronously and asynchronously',
  git: 'https://github.com/CapsuleCat/MeteorCommands',
  documentation: 'README.md'
});

function includeFiles(api) {
  api.use('ecmascript');
  api.addFiles('src/dispatch.js');
}

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  includeFiles(api);
  api.export(['dispatch', 'dispatchAsync']);
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.20.3');
  includeFiles(api);
  api.addFiles('tests/dispatch-spec.js', ['server', 'client']);
});