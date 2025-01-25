export const getFormattedDate = ({ date, format }) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    
    return new Date(date).toLocaleDateString(format, options);
};
