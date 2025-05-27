<template>
  <nav>
    <ul class="flex items-center justify-center gap-8">
      <li>
        <ToolTip text="GitHub" v-slot="slotProps">
          <AppButton href="https://github.com/tsunematsu21" :aria-labelledby="slotProps.tooltipId" />
        </ToolTip>
      </li>
      <li>
        <ToolTip text="Instagram" v-slot="slotProps">
          <AppButton href="https://instagram.com/tsunematsu21" :aria-labelledby="slotProps.tooltipId" />
        </ToolTip>
      </li>
      <li>
        <ToolTip text="X (Twitter)" v-slot="slotProps">
          <AppButton href="https://x.com/tsunematsu21" :aria-labelledby="slotProps.tooltipId" />
        </ToolTip>
      </li>
      <li>
        <ToolTip text="note (Japanese)" v-slot="slotProps">
          <AppButton href="https://note.com/tsunematsu21" :aria-labelledby="slotProps.tooltipId" />
        </ToolTip>
      </li>
    </ul>
  </nav>
</template>
