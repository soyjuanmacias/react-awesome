const adapter = (data) => {
    return {
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
    };
}

export default adapter;