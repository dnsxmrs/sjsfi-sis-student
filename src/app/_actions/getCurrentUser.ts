export async function getCurrentUser() {
    // Replace with fetching logic from your database or API

    // const { userId } = getAuth();

    // if (!userId) {
    //     return null;
    // }

    // // Fetch user data from your database or API
    // const user = await fetchUserFromDatabase(userId);
    // return user;

    // for now, return a name and student number
    return {
        name: "Marial, Erice Michael Dionisio",
        studentNo: "2022-00304-CM-0",
        schoolYear: "2024-2025"
    }
}
