<template>
  <nav>
    <ul class="flex items-center justify-center gap-8">
      <li>
        <Tooltip text="GitHub" v-slot="slotProps">
          <Button href="https://github.com/tsunematsu21" :aria-labelledby="slotProps.tooltipId" />
        </Tooltip>
      </li>
      <li>
        <Tooltip text="Instagram">
          <Button href="https://instagram.com/tsunematsu21" />
        </Tooltip>
      </li>
      <li>
        <Tooltip text="X (Twitter)">
          <Button href="https://x.com/tsunematsu21" />
        </Tooltip>
      </li>
      <li>
        <Tooltip text="note (Japanese)">
          <Button href="https://note.com/tsunematsu21" />
        </Tooltip>
      </li>
    </ul>
  </nav>
</template>
