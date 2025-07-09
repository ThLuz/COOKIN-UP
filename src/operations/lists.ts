export function List1IsOnList2(list1: unknown[], list2: unknown[]) {
  return list1.every((itemlist1) => list2.includes(itemlist1))
}