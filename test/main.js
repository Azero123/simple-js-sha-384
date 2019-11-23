const tests = {
    abc:
    'cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7',
   'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu':
    '09330c33f71147e83d192fc782cd1b4753111b173b3b05d22fa08086e3b0f712fcc7c71a557e2db966c3e9fa91746039',
    '1abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu':
    '623289cc05b54a7f02827a4fb1d12c4d9ded0d55e245bda44118beb2b2db67b807333828789676e80fd2c1af26199673'
}

const sha2_384 = require('../src/main.js')
for (const input of Object.keys(tests)) {
    const output = tests[input]
    if (sha2_384(input) !== tests[input]) {
        throw `input failed ${input} ${sha2_384(input)} should be ${output}`
    }
}