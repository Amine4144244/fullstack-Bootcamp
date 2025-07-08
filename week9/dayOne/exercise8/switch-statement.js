function getAction(role) {
    switch (role.toLowerCase()) {
        case 'admin':
            return 'Manage users and settings';
        case 'editor':
            return 'Edit content';
        case 'viewer':
            return 'View content';
        case 'guest':
            return 'Limited access';
        default:
            return 'Invalid role';
    }
}
// Test cases
console.log(getAction("admin"));
console.log(getAction("EDITOR"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));
console.log(getAction(""));
