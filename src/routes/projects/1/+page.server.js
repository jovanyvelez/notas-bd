import { turso } from "$lib/db.server";


export const actions = {
    query: async ({request}) => {


        const data = await request.formData();
		const sqlString = data.get('consulta');
   


        let sqlRows = [];

        try {
            const { rows } = await turso.execute(sqlString);
            sqlRows = rows;
            if(sqlRows.length === 0) {
                sqlRows = [{name:'En tu consulta no hay resultados',code:'No hay resultados'}]
            }
        } catch (error) {


            sqlRows = [
                { name: error.message, code: error.code },
            ];

        }

        return { sqlRows };
    },
    register: async (event) => {
        // TODO register the user
    }

};