import { prisma } from "@repo/db/client";

export default async function Home() {

  // Create a new user
  await prisma.user.create({
    data: {
      username: "aditya",
      password: "123456"
    }
  });

  // Fetch all users
  const users = await prisma.user.findMany();

  return (
    <div>
      <div>
        <h1> Check condition for the staging area </h1>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugiat illum quam commodi modi accusantium, necessitatibus magnam non exercitationem recusandae cum nisi? Sint amet eum nobis quia molestias, eveniet ab quam aspernatur sed modi fugiat sequi porro qui, minima perferendis ipsa atque laboriosam dolore harum cumque voluptates. Saepe, suscipit ab.</p>
      </div>
      <h1>Hello from BMS Web App 🚀</h1>

      <h2>Users in Database</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      ))}
    </div>
  );
}