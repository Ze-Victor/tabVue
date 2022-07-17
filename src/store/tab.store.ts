import { reactive } from "vue";

export interface TabItem {
  title: string;
  text: string;
}

export interface TabList {
  listTabs: TabItem[];
  saveNewTabs: (tabs: TabItem[]) => void;
}

export const tabStore = reactive<TabList>({
  listTabs: reactive<TabItem[]>([]),

  saveNewTabs(tabs: TabItem[]) {
    this.listTabs = [];
    for (let index in tabs) {
      this.listTabs.push({
        title: tabs[index].title,
        text: tabs[index].text,
      });
    }
  },
});
