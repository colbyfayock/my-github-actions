function mooncakeSays(message) {
  let mooncake = '(O.o)';

  if ( !message ) mooncake;

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;