export const styles = {
    tableCell: {
        color: '#159283',
        fontWeight: 700,
        backgroundColor: '#1592830D',
        borderBottom: '3px solid #159283',
        fontSize: '14px'
    },

    headerCell: {
        fontWeight: 600,
        fontSize: '14px',
        backgroundColor: 'white', 
        position: 'sticky',
        borderBottom: '3px solid #159283',
        top: 0,
        zIndex: 1,
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor:' #159283',
            zIndex: -1,
        },
    },

    tableContainer: {
        maxHeight: '60vh',
        boxShadow: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '-ms-overflow-style': 'none', 
        'scrollbar-width': 'none',     
    },
    actionStyle: {
        borderRadius: '9px', height: '27px', width: '85px', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }
}