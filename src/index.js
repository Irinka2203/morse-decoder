const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
				const exprArr = Array.from(expr)
				const newExprArr =[]
				const codeSymbol = []
				
				const arrObj = Object.entries(MORSE_TABLE);
				const strArr = []
				
				for (let i=0; i<exprArr.length; i+=10){
					newExprArr.push(exprArr.slice(i, i+10))
				}
				
				const codeArr = newExprArr.forEach((el,i)=>{
					
					let codeString = ''
					let exprString = ''
					for (let j=0; j<el.length; j+=2){
						let codeNumber = el[j]+el[j+1]
						if (codeNumber === '10'){
							codeString += '.'
						}else if ( codeNumber === '11'){
							codeString += '-'
						} 
						
					}  strArr.push(codeString);
					
					 
					});
					const newString = strArr.map(str => {
						if (MORSE_TABLE[str]){
							return MORSE_TABLE[str]
						} return " "
						
					}).join('')
					return newString
				}

module.exports = {
    decode
}

const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"