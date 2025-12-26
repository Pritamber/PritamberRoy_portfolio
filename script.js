const glass = document.getElementById("glass");

glass.addEventListener("click", (e) => {
    const shardCount = 25;

    for (let i = 0; i < shardCount; i++) {
        const shard = document.createElement("div");
        shard.classList.add("shard");

        const x = e.clientX;
        const y = e.clientY;

        shard.style.left = `${x}px`;
        shard.style.top = `${y}px`;

        shard.style.setProperty("--x", `${(Math.random() - 0.5) * 800}px`);
        shard.style.setProperty("--y", `${(Math.random() - 0.5) * 800}px`);
        shard.style.setProperty("--r", `${Math.random() * 720}deg`);

        document.body.appendChild(shard);

        setTimeout(() => shard.remove(), 1000);
    }

    glass.style.opacity = 0;

    setTimeout(() => {
        glass.remove();
    }, 500);
});
