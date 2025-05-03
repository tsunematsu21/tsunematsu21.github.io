<template>
  <NuxtLayout>
    <template #header>
      <AppSection>
        <template #header>
          <h1 class="flex flex-col items-start leading-snug">
            <span>Hi,</span>
            <span>I'm Masato</span>
            <span>Tsunematsu</span>
          </h1>
        </template>
        <p class="absolute top-0 right-0 flex flex-wrap items-end flex-col leading-wide text-[clamp(10px,3vw,24px)] text-primary">
          <span>The coke drinking</span>
          <span>infrustructure engineer</span>
          <span>based in Japan</span>
        </p>
      </AppSection>
    </template>

    <AppSection id="biography">
      <template #header>
        <h2>Biography</h2>
      </template>
      <p>
        On January 1st, 1994, I was born in the jungle and raised by a gorilla.
      </p>
      <p>
        One day, I acquired wisdom by eating the legendary banana
        and decided become to awesome engineer that useful for people.
      </p>
    </AppSection>

    <AppSection id="experience">
      <template #header>
        <h2>Experience</h2>
      </template>
      <AppSection>
        <template #header>
          <small>Apr 2016 - Sep 2016</small>
          <h3>Network programming</h3>
        </template>
        <p>
          Participated in the research and development of a video streaming system using SDN with
          <AppLink href="https://wikipedia.org/wiki/OpenFlow">OpenFlow</AppLink>,
          handling design, development, and testing.
        </p>
        <p>
          Gained knowledge in networking and infrastructure through network programming with
          <AppLink href="https://www.python.org">Python</AppLink>,
          in addition to programming skills.
        </p>
      </AppSection>
      <AppSection>
        <template #header>
          <small>Oct 2016 - May 2020</small>
          <h3>Database administration</h3>
        </template>
        <p>
          Worked as a database administrator for several B2C companies,
          responsible for designing, building, testing, and operating
          <AppLink href="https://www.oracle.com/database/">Oracle Database</AppLink>,
          <AppLink href="https://www.mysql.com/">MySQL</AppLink>,
          <AppLink href="https://www.postgresql.org">PostgreSQL</AppLink>,
          and <AppLink href="https://www.microsoft.com/sql-server">SQL Server</AppLink>
          in both on-premises and <AppLink href="https://aws.amazon.com">AWS</AppLink> environments.
        </p>
        <p>
          Focused on performance tuning through memory optimization, index design, and SQL refactoring.
          Achieved efficient operations using infrastructure as code with
          <AppLink href="https://developer.hashicorp.com/terraform">Terraform</AppLink> and automation scripts.
        </p>
        <p>
          Also contributed to application development by leveraging experience as a programmer.
        </p>
      </AppSection>
      <AppSection>
        <template #header>
          <small>Jun 2020 - Present</small>
          <h3>Cloud migration</h3>
        </template>
        <p>
          Worked as an infrastructure engineer on several government-related projects
          involving system migration from on-premises to <AppLink href="https://aws.amazon.com">AWS</AppLink>.
          Responsibilities spanned proposal, requirements definition, design, development, testing, operation, and maintenance.
        </p>
        <p>
          Migrated proprietary RDBMS to <AppLink href="https://aws.amazon.com/rds/">Amazon RDS</AppLink> and <AppLink href="https://aws.amazon.com/rds/">Aurora</AppLink>,
          and transitioned application platforms to <AppLink href="https://aws.amazon.com/ecs/">Amazon ECS</AppLink> to maximize the benefits of cloud services within practical constraints.
          Contributed to efficient infrastructure provisioning using IaC tools such as <AppLink href="https://aws.amazon.com/cloudformation/">CloudFormation</AppLink>,
          <AppLink href="https://docs.aws.amazon.com/cdk/">AWS CDK</AppLink>, and <AppLink href="https://docs.ansible.com">Ansible</AppLink>.
        </p>
      </AppSection>
    </AppSection>

    <AppSection id="capability">
      <template #header>
        <h2>Capability</h2>
      </template>
      <p>
        I can transform into legendary warriors known as the Cure Gorilla.
      </p>
      <p>
        With the assistance of creatures known as fairies,
        use their physical powers and enhanced Banana to fight against evil forces
        and organizations who create monsters to bring misery to the Earth and further their plans.
      </p>
    </AppSection>

    <AppSection id="showcase">
      <template #header>
        <h2>Showcase</h2>
        <p>
          Showcase some products.
        </p>
      </template>
      <AppSection>
        <template #header>
          <h3>dotfiles</h3>
        </template>
        <p>
          My macOS dotfiles.
          Automate the setup by deploying configuration files with stow, installing packages with Brewfile, and configuring the OS with defaults command.
        </p>
        <AppLink href="https://github.com/tsunematsu21/boop">
          Show GitHub repo
        </AppLink>
      </AppSection>
      <AppSection>
        <template #header>
          <h3>boop</h3>
        </template>
        <p>The connectivity test tool made with Golang.</p>
        <AppLink href="https://github.com/tsunematsu21/boop">
          Show GitHub repo
        </AppLink>
      </AppSection>
    </AppSection>

    <AppSection id="contact">
      <template #header>
        <h2>Get in touch</h2>
      </template>
      <p>
        Want to get in touch? I'm not currently looking for a job, but welcome feedback and chat.
        Please ping me on socials. I will try my best to reply to you.
      </p>
      <SocialLink />
    </AppSection>

    <template #footer>
      <div class="flex items-center justify-between font-sans">
        <small>&copy; 2025 Masato Tsunematsu</small>
        <small>Made with love</small>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Masato Tsunematsu - The coke drinking infrustructure engineer based in Japan.',
  ogTitle: 'Masato Tsunematsu - The coke drinking infrustructure engineer based in Japan.',
  description: 'This is my amazing site, I will give you power of the gorilla.',
  ogDescription: 'This is my amazing site, I will give you power of the gorilla.',
})
</script>
