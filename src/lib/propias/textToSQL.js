const reservedWords = [
    'SELECT',
    'IN',
    'FROM',
    'WHERE',
    'INSERT',
    'INTO',
    'UPDATE',
    'DELETE',
    'CREATE',
    'DROP',
    'ALTER',
    'TABLE',
    'JOIN',
    'LEFT',
    'RIGHT',
    'FULL',
    'INTERSECT',
    'UNION',
    'EXCEPT',
    'ON',
    'GROUP',
    'BY',
    'ORDER',
    'DESC',
    'ASC',
    'HAVING',
    'AND',
    'OR',
    'NOT',
    'NULL',
    'AS',
    'DISTINCT'
];
export default function textToSQL(sqlText) {

		sqlText = sqlText
			.split(/\s+/)
			.map((word) => {
				if (reservedWords.includes(word.toUpperCase())) {
					return word.toUpperCase()
				}
				return word;
			})
			.join(' ');

        return sqlText
	}