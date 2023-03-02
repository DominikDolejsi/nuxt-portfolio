<script lang="ts" setup></script>

<template>
  <section>
    <h2 class="sectionHeading">My Skills</h2>
    <div class="techContainer">
      <SkillsContainer title="Languages">
        <IconsJavaScript />
        <IconsTypeScript />
        <IconsHTML />
        <IconsCSS />
        <IconsJava />
      </SkillsContainer>
      <SkillsContainer title="Frontend">
        <IconsVue />
        <IconsReact />
        <IconsNuxt />
      </SkillsContainer>
      <SkillsContainer title="Backend">
        <IconsNode />
        <IconsSpring />
      </SkillsContainer>
      <SkillsContainer title="Tools">
        <IconsVScode />
        <IconsCommandLine />
        <IconsGit />
        <IconsGitHub />
      </SkillsContainer>
    </div>
  </section>
</template>
