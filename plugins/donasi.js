let handler = async m => m.reply(`
╭─「 Donasi • DANA 」
│ •  [+6287854602194]
│ 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
