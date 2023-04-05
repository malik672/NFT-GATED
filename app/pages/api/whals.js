import Whal3s, {NftValidationUtility} from "@whal3s/whal3s.js";
const whal3s = new Whal3s();

const utility = async() => {
  return await whal3s.createValidationUtility("")
}

const [step, setStep] = useState(NftValidationUtility.STEP_UNINITIALIZED)
utility().addEventListener('stepChanged', (event) => {
    setStep(event.detail.step)
})

