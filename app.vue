<template>
  <NuxtLayout>
    <AppSection title="Biography">
      <p>
        On January 1st, 1994, I was born in the jungle and raised by a gorilla.
      </p>
      <p>
        One day, I acquired wisdom by eating the legendary banana
        and decided become to awesome engineer that useful for people.
      </p>
    </AppSection>

    <AppSection title="Experience">
      <AppSection title="Network programming" :level="3" label="Apr 2016 - Sep 2016">
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
      <AppSection title="Database administration" :level="3" label="Oct 2016 - May 2020">
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
      <AppSection title="Cloud migration" :level="3" label="Jun 2020 - Present">
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

    <AppSection title="Capability">
      <p>
        I can transform into legendary warriors known as the Cure Gorilla.
      </p>
      <p>
        With the assistance of creatures known as fairies,
        use their physical powers and enhanced Banana to fight against evil forces
        and organizations who create monsters to bring misery to the Earth and further their plans.
      </p>
      <p>In addition, I have the following skills:</p>
      <dl class="[&_dt]:font-bold [&_dd]:pl-[1em] [&_dd]:pb-[1em] [&_dd]:text-sm">
        <dt>Programming:</dt>
        <dd>
          TypeScript, Python, Go, Ruby, Java
        </dd>

        <dt>Database:</dt>
        <dd>
          Oracle, MySQL, PostgreSQL, Db2, Amazon RDS / Aurora / DynamoDB / DocumentDB, Elasticache
        </dd>

        <dt>Cloud:</dt>
        <dd>
          Amazon Web Service, Microsoft Azure
        </dd>

        <dt>IaC:</dt>
        <dd>
          AWS CDK, CloudFormation, Ansible, Terraform
        </dd>

        <dt>Monitoring:</dt>
        <dd>
          CloudWatch, Zabbix, Mackerel
        </dd>

        <dt>Other:</dt>
        <dd>
          Git, Docker
        </dd>
      </dl>
    </AppSection>

    <AppSection title="Showcase">
      <p>
        Showcase some products.
      </p>
      <AppSection title="dotfiles" :level="3" :tags="['dotfiles', 'macos-setup']">
        <p>
          My macOS dotfiles.
          Automate the setup by deploying configuration files with stow, installing packages with Brewfile, and configuring the OS with defaults command.
        </p>
        <template #footer>
          <AppButton href="https://github.com/tsunematsu21/dotfiles">
            View on GitHub
          </AppButton>
        </template>
      </AppSection>
      <AppSection title="FizzBuzz Generic Library in Go" :level="3" :tags="['golang', 'fizzbuzz']">
        <p>This is a flexible and reusable FizzBuzz library implemented in Go using generics.</p>
        <p>It allows you to define custom rules and actions for any type, making it easy to extend the traditional FizzBuzz pattern beyond simple integers.</p>
        <template #footer>
          <AppGroup>
            <AppButton href="https://github.com/tsunematsu21/fb">
              View on GitHub
            </AppButton>
            <AppButton href="https://pkg.go.dev/github.com/tsunematsu21/fb">
              View on Go Packages
            </AppButton>
            <AppButton href="https://note.com/tsunematsu21/n/n3059c20363ec">
              View on note (Japanese)
            </AppButton>
          </AppGroup>
        </template>
      </AppSection>
    </AppSection>

    <AppSection title="Get in touch">
      <p>
        Want to get in touch? I'm not currently looking for a job, but welcome feedback and chat.
        Please ping me on socials or email below. I will try my best to reply to you.
      </p>
      <template #footer>
        <AppButton href="mailto:hello@ma.tsu.sh" class="">
          hello@ma.tsu.sh
        </AppButton>
      </template>
    </AppSection>

    <AppSection title="Colophon">
      <p>
        Thank you for visiting my site. This site is built with Nuxt.js and Tailwind CSS and hosted on GitHub Pages. The code is available on <AppLink href="https://github.com/tsunematsu21/tsunematsu21.github.io">GitHub</AppLink>.
      </p>
      <p>
        I am not a native English speaker, so I apologize if the English on the site content is incorrect. But I did my best to create this site to practice my English as well.
      </p>
    </AppSection>
  </NuxtLayout>
</template>
